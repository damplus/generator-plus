import * as yo from 'yeoman-generator';
import * as _ from 'lodash';
import * as path from 'path';

interface ComponentConfig {
  baseName: string
  packageDescription: string
  keyword: string
}

module.exports = class ComponentGenerator extends yo.Base implements ComponentConfig {
  baseName: string
  packageDescription: string
  keyword: string

  constructor(args: string | string[], options: any) {
    super(args, options)
  }

  promptSettings() {
    return this.prompt([
      {
        name: 'baseName',
        type: 'string',
        message: 'Enter the name of this component:',
      },
      {
        name: 'packageDescription',
        type: 'string',
        message: 'Briefly describe the purpose of the component:'
      },
      {
        name: 'keyword',
        type: 'string',
        message: 'Enter a keyword that identifies the component type:'
      }
    ])
    .then(response => {
      _.assign(this, response)
    })
  }

  copyTemplates() {
    const outDir = path.join('packages', _.kebabCase(this.baseName));
    const copy = (file: string, destpath: string = '.') => {
      this.fs.copyTpl(
        this.templatePath(file + '.ejs'),
        this.destinationPath(destpath, file),
        _.assign(
          {},
          this,
          {
            componentName: _.startCase(this.baseName).replace(/ /g, ''),
            packageName: `pluskit-component-${_.kebabCase(this.baseName)}`,
            keyword: _.kebabCase(this.keyword),
          },
        )
      )
    }

    this.destinationRoot(outDir)

    copy('package.json');
    copy('stories.tsx');
    copy('default.scss');
    copy('test.tsx');
    copy('index.tsx', 'src');
  }

  install() {
    this.installDependencies();
  }
}
