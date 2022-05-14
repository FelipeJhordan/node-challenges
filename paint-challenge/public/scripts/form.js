const createJsonData = (data) => (
     {
        frontWall: {
            height: data.frontWallHeight,
            width: data.frontWallWidth,
            windows: data.frontWallWindows,
            doors: data.frontWallDoors,
        },
        
        backWall: {
            height: data.backWallHeight,
            width: data.backWallWidth,
            windows: data.backWallWindows,
            doors: data.backWallDoors,
        },
        leftWall: {
            height: data.leftWallHeight,
            width: data.leftWallWidth,
            windows: data.leftWallWindows,
            doors: data.leftWallDoors,
        },
        rightWall: {
            height: data.rightWallHeight,
            width: data.rightWallWidth,
            windows: data.rightWallWindows,
            doors: data.rightWallDoors,
        },

    })

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = $('.form').serializeArray().reduce(function(obj, item) {
        obj[item.name] = Number(item.value);
        return obj;
    }, {});

    let data = createJsonData(formData)

    sendData(data)
  });

