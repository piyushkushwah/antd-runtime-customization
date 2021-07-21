#npm i antd-theme-generator
#make a seperate colors.js file in root directory
#copy paste this code with understanding of this code
#you can find the same code in official antd-theme-generator library

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
  
#next npm i less 
#then run the command node colors.js in terminal it will generate the colors.less file in public folder 
#then import this file in your react app.js and put this code in componentdidmount  

componentDidMount(){
less.modifyVars({'primary-color':'lightgreen'})
}

#add colors.less file in index.html in public folder 

<link rel="stylesheet/less" type="text/css" href="color.less" />
<script>
  window.less = { async: true, env: 'production', javascriptEnabled: true, };
</script>
 
#add more variables in less.modifyVars({'primary-color':'lightgreen'}) modifyVars it's takes the object
🥂 
