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
        message: 'Enter the name of this component:',
      },
      {
        name: 'description',
        type: 'string',
        message: 'Briefly describe the purpose of the component:'
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
        this.destinationPath('src', 'views', dest),
        _.assign(
          {},
          this,
          {
            fileBase,
            componentName: _.startCase(this.baseName).replace(/ /g, '')
          },
        )
      )
    }

    copy('component.tsx', `${fileBase}.tsx`)
    copy('stories.tsx', `${fileBase}.stories.tsx`)
    copy('test.tsx', `${fileBase}.test.tsx`)
    copy('style.scss', `${fileBase}.style.scss`)
  }
}
