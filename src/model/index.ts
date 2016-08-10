import * as yo from 'yeoman-generator';
import * as _ from 'lodash';

interface ComponentConfig {
  baseName: string
  description: string
}

module.exports = class ComponentGenerator extends yo.Base implements ComponentConfig {
  baseName: string
  description: string

  promptSettings() {
    return this.prompt([
      {
        name: 'baseName',
        type: 'string',
        message: 'Enter the name of this model:',
      },
      {
        name: 'description',
        type: 'string',
        message: 'Briefly describe its purpose:'
      }
    ])
    .then(response => {
      _.assign(this, response)
    })
  }

  copyTemplates() {
    const fileBase = _.kebabCase(this.baseName)
    const copy = (file: string, dest: string) => {
      this.fs.copyTpl(
        this.templatePath(file + '.ejs'),
        this.destinationPath('src', 'models', dest),
        _.assign(
          {},
          this,
          {
            fileBase,
            moduleName: _.startCase(this.baseName).replace(/ /g, '')
          },
        )
      )
    }

    copy('model.ts', `${fileBase}.ts`)
    copy('model.test.ts', `${fileBase}.test.ts`)
  }

  notify() {
    this.log('Created a new model in src/models')
    this.log('Remember to add the action and update to models/index.ts')
  }
}
