var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]: value})
  object.key = value;
  return newObj;
}

destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
