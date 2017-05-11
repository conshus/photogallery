var Rebase = require('re-base');
var config = {
  apiKey: "AIzaSyAMIS8sB3ZwlRuB7tVZry0Cxbv9YaoOp2A",
  authDomain: "tiyphotos.firebaseapp.com",
  databaseURL: "https://tiyphotos.firebaseio.com",
  projectId: "tiyphotos",
  storageBucket: "tiyphotos.appspot.com",
  messagingSenderId: "779546192092"
};
var base = Rebase.createClass(config);
export default base;
