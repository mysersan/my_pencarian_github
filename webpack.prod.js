const merge = require("webpack-merge");
const common = require("./webpack.common");
const port = process.env.PORT
 
module.exports = merge(common, {
   mode: "production",
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: "/node_modules/",
               use: [
                   {
                       loader: "babel-loader",
                       options: {
                           presets: ["@babel/preset-env"]
                       }
                   }
               ]
           }
       ]
   }
})