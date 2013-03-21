function mergeTwoObjects (obj1, obj2) 
{
    for (var p in obj2) {
  	    obj1[p] = obj2[p];
	  }
	  return obj1;
}
