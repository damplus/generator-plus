"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var yo = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');
module.exports = (function (_super) {
    __extends(ComponentGenerator, _super);
    function ComponentGenerator(args, options) {
        _super.call(this, args, options);
    }
    ComponentGenerator.prototype.promptSettings = function () {
        var _this = this;
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
            .then(function (response) {
            _.assign(_this, response);
        });
    };
    ComponentGenerator.prototype.copyTemplates = function () {
        var _this = this;
        var outDir = path.join('packages', _.kebabCase(this.baseName));
        var copy = function (file, destpath) {
            if (destpath === void 0) { destpath = '.'; }
            _this.fs.copyTpl(_this.templatePath(file + '.ejs'), _this.destinationPath(destpath, file), _.assign({}, _this, {
                componentName: _.startCase(_this.baseName).replace(/ /g, ''),
                packageName: "pluskit-component-" + _.kebabCase(_this.baseName),
                keyword: _.kebabCase(_this.keyword),
            }));
        };
        this.destinationRoot(outDir);
        copy('package.json');
        copy('stories.tsx');
        copy('default.scss');
        copy('test.tsx');
        copy('index.tsx', 'src');
    };
    ComponentGenerator.prototype.install = function () {
        this.installDependencies();
    };
    return ComponentGenerator;
}(yo.Base));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQVksRUFBRSxXQUFNLGtCQUFrQixDQUFDLENBQUE7QUFDdkMsSUFBWSxDQUFDLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDNUIsSUFBWSxJQUFJLFdBQU0sTUFBTSxDQUFDLENBQUE7QUFRN0IsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUFpQyxzQ0FBTztJQUt2RCw0QkFBWSxJQUF1QixFQUFFLE9BQVk7UUFDL0Msa0JBQU0sSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFRCwyQ0FBYyxHQUFkO1FBQUEsaUJBcUJDO1FBcEJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2pCO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsbUNBQW1DO2FBQzdDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLG9CQUFvQjtnQkFDMUIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLGdEQUFnRDthQUMxRDtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxRQUFRO2dCQUNkLE9BQU8sRUFBRSxxREFBcUQ7YUFDL0Q7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUNaLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDBDQUFhLEdBQWI7UUFBQSxpQkF5QkM7UUF4QkMsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFNLElBQUksR0FBRyxVQUFDLElBQVksRUFBRSxRQUFzQjtZQUF0Qix3QkFBc0IsR0FBdEIsY0FBc0I7WUFDaEQsS0FBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQ2IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEVBQ2hDLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUNwQyxDQUFDLENBQUMsTUFBTSxDQUNOLEVBQUUsRUFDRixLQUFJLEVBQ0o7Z0JBQ0UsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2dCQUMzRCxXQUFXLEVBQUUsdUJBQXFCLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBRztnQkFDOUQsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQyxDQUNGLENBQ0YsQ0FBQTtRQUNILENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBOURnQixDQUFpQyxFQUFFLENBQUMsSUFBSSxFQThEeEQsQ0FBQSJ9