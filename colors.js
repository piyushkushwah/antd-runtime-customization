const path = require('path')
const {generateTheme} = require('antd-theme-generator')
const fs = require('fs');
const less = require('less');

const options = {
    antDir: path.join(__dirname, './node_modules/antd'),
    stylesDir: path.join(__dirname, './src'), // all files with .less extension will be processed
    varFile: path.join(__dirname, './src/styles/variables.less'), // default path is Ant Design default.less file
    themeVariables: ['@primary-color'],
    outputFilePath: path.join(__dirname, './public/color.less'), // if provided, file will be created with generated less/styles
    customColorRegexArray: [/^fade\(.*\)$/], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
  }

  console.log('rea');
  
  // export default function test(){
    console.log('test');
    generateTheme(options).then(generated_theme => {
        console.log('Theme generated successfully');
        return less.render(generated_theme,{javascriptEnabled:true})
      }).then(({css})=>{
        fs.writeFile('./src/test.css',css,(err)=>{
            console.log(err);
        })
      })
      .catch(error => {
        console.log('Error', error);
      })
  // }
 