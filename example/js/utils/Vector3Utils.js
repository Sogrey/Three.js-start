//获取数组中最小值的方法
function smallest(array) {
    return Math.min.apply(Math, array);
}

//获取数组中最大值的方法
function largest(array) {
    return Math.max.apply(Math, array);
}
/**
 * 根据构件包围盒顶点坐标字符串（由GetPosById(GUID);获得）获取构件各个顶点和中心点
 * @param {string} positions 
 */
function getPointVector3(positions) {
    console.log(positions)
    var positionArray = positions.split(",");
    console.log(positionArray);

    var positionVector3Array = new Array();
    //三个一组 共9组
    for (var i = 0; i < 9; i++) {
        var vector3 = new THREE.Vector3(positionArray[i * 3], positionArray[i * 3 + 1], positionArray[i * 3 + 2]);
        positionVector3Array.push(vector3);
    }
    return positionVector3Array;
}
/**
 * 获取包围盒xyz三边长度
 *
 * @param {Array<Vector3>} positionVector3Array
 */
function getXYZByPointVector3s(positionVector3Array) {
    var xArray = new Array(),
        yArray = new Array(),
        zArray = new Array(),
        result = new Array();

    //有中心点不影响
    positionVector3Array.forEach(function (item) {
        // console.log(item);
        if(item instanceof THREE.Vector3){
            xArray.push(item.x);
            yArray.push(item.y);
            zArray.push(item.z);
        }        
    });

    result.push(Math.abs(largest(xArray) - smallest(xArray)));
    result.push(Math.abs(largest(yArray) - smallest(yArray)));
    result.push(Math.abs(largest(zArray) - smallest(zArray)));
    return result;
}