//var canvas = this.__canvas = new fabric.Canvas('c',{backgroundImage: "images/graph.png", });
var canvas = this.__canvas = new fabric.Canvas('c');

  var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
  var img = document.createElement('img');
  img.src = deleteIcon;
  fabric.Object.prototype.cornerColor = '#131313';
  fabric.Object.prototype.transparentCorners = false;
  
 /*
 const originalToObject = fabric.Object.prototype.toObject;
const myAdditional = ['id'];
const myAdditional2 = ['oncolor'];
const myAdditional3 = ['offcolor'];
fabric.Object.prototype.toObject = function (additionalProperties) {
    return originalToObject.call(this, myAdditional.concat(additionalProperties));
}
fabric.Object.prototype.toObject = function (additionalProperties) {
    return originalToObject.call(this, myAdditional2.concat(additionalProperties));
}
fabric.Object.prototype.toObject = function (additionalProperties) {
    return originalToObject.call(this, myAdditional3.concat(additionalProperties));
}
*/

fabric.Object.prototype.toObject = (function (toObject) {
    return function (properties) {
        return fabric.util.object.extend(toObject.call(this, properties), {
            'id': this.id,
			 'dir': this.dir,
			 'val': this.val,
			'oncolor': this.oncolor,
			'offcolor': this.offcolor,
			'textvalue': this.textvalue,
			'tagscript':this.tagscript,
			'scriptag':this.scriptag,
        });
    };
})(fabric.Object.prototype.toObject);
/*
document.getElementById('name').onclick = function() {
	
  canvas.getActiveObject().set("id", this.value);
  canvas.renderAll();
   updateModifications(true);
	
};



document.getElementById('on').onclick = function() {
	
  canvas.getActiveObject().set("oncolor", this.value);
  canvas.renderAll();
   updateModifications(true);
	
};
document.getElementById('off').onclick = function() {
	
  canvas.getActiveObject().set("offcolor", this.value);
  canvas.renderAll();
   updateModifications(true);
	
};
*/
var input1 = document.getElementById("name");
input1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("id", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});

var Tagscript = document.getElementById("tagscript");
Tagscript.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("tagscript", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});

var Scriptag = document.getElementById("scriptag");
Scriptag.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("scriptag", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});

var direction = document.getElementById("dir");
direction.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("dir", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});
document.getElementById('on').onchange = function() {
   event.preventDefault();
   canvas.getActiveObject().set("oncolor", this.value);
  canvas.renderAll();
   updateModifications(true);
};

document.getElementById('off').onchange = function() {
   event.preventDefault();
   canvas.getActiveObject().set("offcolor", this.value);
  canvas.renderAll();
   updateModifications(true);
};


/*
var input2 = document.getElementById("on");
input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("oncolor", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});

var input3 = document.getElementById("off");
input3.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   canvas.getActiveObject().set("offcolor", this.value);
  canvas.renderAll();
   updateModifications(true);  
  }
});
*/
function addrec2() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: '#33ffc2',
      width: 100,
      height: 80,
      objectCaching: false,
      strokeWidth: 2,
	  stroke:'#3344ff ' ,
	  id :'text-1234',
	  oncolor:'green',
	  offcolor:'red',
	  strokeUniform: true
    });
	
    canvas.add(rect);
    canvas.setActiveObject(rect);
	 updateModifications(true);

  }
  function addText2() {
    var itext = new fabric.IText('This is a IText object', {
      left: 100,
      top: 150,
      fill: '#131313',
      selectable: true,
	  id :'text-1234',
	  textvalue:"hello",
    });

    canvas.add(itext);
	 updateModifications(true);
  }

  // add rectangle
  function addRect() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: 'yellow',
      width: 200,
      height: 100,
      objectCaching: false,
      strokeWidth: 4,
	   strokeUniform: true
    });

    canvas.add(rect);
    canvas.setActiveObject(rect);
  }
function addrec() {
    var rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: '#33ffc2',
      width: 100,
      height: 80,
      objectCaching: false,
      strokeWidth: 2,
	  stroke:'#3344ff ' ,
	   strokeUniform: true
    });

    canvas.add(rect);
    canvas.setActiveObject(rect);
	 updateModifications(true);
  }

function addcircle() {
  var circle = new fabric.Circle({
  radius: 70, fill: 'green', left: 350, top: 100 ,  strokeUniform: true
});
canvas.add(circle);
canvas.setActiveObject(circle);
 updateModifications(true);
}
  // add text
  function addText() {
    var itext = new fabric.IText('This is a IText object', {
      left: 100,
      top: 150,
      fill: '#131313',
      selectable: true
    });

    canvas.add(itext);
	 updateModifications(true);
  }
 function addline(){
var myline = new fabric.Line([50, 100, 200, 100], {
        left: 50,
        top: 200,
        stroke: 'red',
		selectable: true,
		 strokeUniform: true
    });
 canvas.add(myline);
  updateModifications(true);
 }
 

var clipboard = null;
var copy =  document.getElementById("copy");
var paste =  document.getElementById("paste");
var group =  document.getElementById("group");
var ungroup =  document.getElementById("ungroup");

copy.onclick = Copy;
paste.onclick = Paste;
group.onclick = Group;
ungroup.onclick = Ungroup;


function Group() {
        if (!canvas.getActiveObject()) {
          return;
        }
        if (canvas.getActiveObject().type !== 'activeSelection') {
          return;
        }
        canvas.getActiveObject().toGroup();
        canvas.requestRenderAll();
      }


function Ungroup() {
  if (!canvas.getActiveObject()) {
    return;
  }
  if (canvas.getActiveObject().type !== 'group') {
    return;
  }
  canvas.getActiveObject().toActiveSelection();
  canvas.requestRenderAll();
}
document.getElementById('tofront').addEventListener("click",enviarFrente);
function enviarFrente()
{
    var myObject = canvas.getActiveObject();
    canvas.bringToFront(myObject);
    canvas.discardActiveObject();
canvas.renderAll(); 
}


document.getElementById('toback').addEventListener("click",enviarFondo);
function enviarFondo()
{
  var myObject = canvas.getActiveObject();
  canvas.sendToBack(myObject);
  canvas.discardActiveObject();
canvas.renderAll(); 
}

function tofront(){
var myObject = canvas.getActiveObject();
    canvas.bringToFront(myObject);
    canvas.discardActiveObject();
canvas.renderAll(); 	
}
function toback( ){
var myObject = canvas.getActiveObject();
  canvas.sendToBack(myObject);
  canvas.discardActiveObject();
canvas.renderAll();	
}

function Copy() {
// clone what are you copying since you may want copy and paste on different moment.
// and you do not want the changes happened later to reflect on the copy.
// maybe.
  canvas.getActiveObject().clone(function(cloned) {
    _clipboard = cloned;
  });
}

function Paste() {
// clone again, so you can do multiple copies.
  _clipboard.clone(function(clonedObj) {
    canvas.discardActiveObject();
    clonedObj.set({
      left: clonedObj.left + 10,
      top: clonedObj.top + 10,
      evented: true,
    });
    if (clonedObj.type === 'activeSelection') {
        // active selection needs a reference to the canvas.
        clonedObj.canvas = canvas;
        clonedObj.forEachObject(function (obj) {
            canvas.add(obj);
        });
        // this should solve the unselectability
        clonedObj.setCoords();
    } else {
       canvas.add(clonedObj);
    }
    canvas.setActiveObject(clonedObj);
    canvas.requestRenderAll();
 });
}  
  // upload image
  function uploadImage(e) {
    console.log('ee', e)
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;                    
      fabric.Image.fromURL(data, function (img) {
        img.scaleToWidth(300);
        var oImg = img.set({
          left: 0, 
          top: 0, 
          angle: 0, 
        });
        
        canvas.add(oImg).renderAll();
        var a = canvas.setActiveObject(oImg);
        var dataURL = canvas.toDataURL({format: 'png', quality: 0.8});

      });
    };
    reader.readAsDataURL(file);
  }
  function importJson(e){}
  // upload svg
  function uploadSVG(e) {
   var url = URL.createObjectURL(e.target.files[0]);
   fabric.loadSVGFromURL(url, function(objects, options) {
      objects.forEach(function(svg) {
         svg.set({
            top: 90,
            left: 90,
            originX: 'center',
            originY: 'center'
         });
        
         svg.scaleToWidth(50);
         canvas.add(svg).renderAll();
      });
   });
  }
  // use modal images
  function addStockImg(e) {
    var imgObj = e.srcElement.currentSrc;
    
    fabric.Image.fromURL(imgObj, function (img) {
        img.scaleToWidth(300);
        var oImg = img.set({
          left: 0, 
          top: 0, 
          angle: 0, 
          id: "00ab"
        });
        
        canvas.add(oImg).renderAll();
        var a = canvas.setActiveObject(oImg);
        document.location.href = "#"
    });
  }

  function exportToSvg() {
    var exportSvg = canvas.toSVG();
    localStorage.setItem('svg', exportSvg);
    var json_data = JSON.stringify(canvas.toDatalessJSON()); 
    console.log(json_data);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(json_data);
    document.querySelector('#list').innerHTML = '<a href="" id="downloadAnchorElem"></a>';
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }
  
  function tosvg() {
    var exportSvg = canvas.toSVG();
	console.log(exportSvg);
    localStorage.setItem('svg', exportSvg);
    //var json_data = JSON.stringify(canvas.toDatalessJSON()); 
    //console.log(json_data);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportSvg);
    document.querySelector('#list').innerHTML = '<a href="" id="downloadAnchorElem"></a>';
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href",     dataStr    );
    dlAnchorElem.setAttribute("download", "scene.svg");
    dlAnchorElem.click();
  }
function  exportTopng(){
	const dataURL = canvas.toDataURL({
     width: canvas.width,
     height: canvas.height,
     left: 0,
     top: 0,
     format: 'png',
});
const link = document.createElement('a');
link.download = 'image.png';
link.href = dataURL;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
	
}
  
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
  });
  function deleteObject(eventData, target) {
		var canvas = target.canvas;
		    canvas.remove(target);
        canvas.requestRenderAll();
	}

  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    var size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -size/2, -size/2, size, size);
    ctx.restore();
  }


var imgSrc = [
    {
      img: "https://unsplash.it/400/500?random",
      name: "Item 1",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/500?random",
      name: "Item 2",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/400?random",
      name: "Item 3",
      price: "4€"
    },
   {
      img: "https://unsplash.it/500/300?random",
      name: "Item 4",
      price: "3€"
    }];
var girlSrc = [
  {
      img: "https://drawinghowtos.com/wp-content/uploads/2019/11/unicorn-colored.png",
      name: "Licorne",
      price: "5€"
    },
   {
      img: "https://i.pinimg.com/originals/69/64/94/69649494d972df188fbbd2f15988419c.png",
      name: "Papillon",
      price: "2€"
    },
   {
      img: "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/12597.png",
      name: "Fleur de cerisier",
      price: "5€"
    }];
var illuSrc = [
    {
      img: "https://isometric.online/wp-content/uploads/2020/05/people_svg.svg",
      name: "People",
      price: "5€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/fitness_svg.svg",
      name: "Fitness",
      price: "5€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/instagram_svg.svg",
      name: "Instagram",
      price: "4€"
    },
   {
      img: "https://isometric.online/wp-content/uploads/2020/04/tv_svg.svg",
      name: "Télévision",
      price: "3€"
    }];


function changeImgSrc(src) {
  // Setup the HTML string
  var html = '';

  // Loop through each wizard and create a list item
  src.forEach(function (item) {
    html += '<li class="item-modal"><img class="img-stock" src="'+ item.img +'" onclick="addStockImg(event)" alt="image asset" width="400" height="500"/><div class="infos-item"><span class="name">'+ item.name +'</span><span class="price">'+ item.price +'</span></div></li>';
  });

  document.querySelector('#list').innerHTML = html;
}

changeImgSrc(imgSrc)

var toggle = document.getElementById('toggle');
var toggleContainer = document.getElementById('toggle-container');
var importInput = document.getElementById('largeFile');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 -1px -1px 50%)';
		toggleContainer.style.backgroundColor = '#131313';
    importInput.style.pointerEvents = 'auto';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% -1px -1px)';
		toggleContainer.style.backgroundColor = '#131313';
    importInput.style.pointerEvents = 'none';
	}
	console.log(toggleNumber)
});
var fileLoaded
var loadFile = function(event) {
  fileLoaded = event
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

function importFile() {
  uploadImage(fileLoaded)
  document.location.href = "#"
}
function importSVG() {
  uploadSVG(fileLoaded)
  document.location.href = "#"
}
function importJson() {
  console.log('e', fileLoaded.target.files[0])
  var json = fileLoaded.target.files[0]
  //uploadJson(fileLoaded)
  var result
  var formatted
  var fr = new FileReader();
  fr.onload = function(e) { 
    console.log("2", e);
    result = JSON.parse(e.target.result);
    console.log("result", result);
    formatted = JSON.stringify(result, null, 2);
    console.log("formatted", formatted);
    
    loadJson(formatted)
  }
  
  fr.readAsText(json); 
  document.location.href = "#"
}
function loadJson(formatted) {
  console.log('here');
    canvas.loadFromJSON(formatted, function(obj) {
    console.log(' this is a callback. invoked when canvas is loaded!xxx ');
    canvas.renderAll();
   
  });  
}
var objType
function switchDisplayFont(obj) {
  switch (objType) {
    case 'i-text':
	  myprop2()
      var obj = canvas.getActiveObject()
      var bold = document.getElementById('text-cmd-bold');
      var italic = document.getElementById('text-cmd-italic');
      var color = document.getElementById('color-selected');
      node = document.getElementById('i-text');
      node.classList.add("visible");
      color.style.backgroundColor = obj.fill
      if(obj.fontWeight === 'bold') { bold.checked = true }
      else {bold.checked = false}
      if(obj.fontStyle === 'italic') { italic.checked = true }
      else {italic.checked = false}
      break;
    case 'image':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
    case 'rect':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
	  case 'polygon':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
	  case 'circle':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
	  case 'line':
      node = document.getElementById('image');
      node.classList.add("visible");
      break;
    default:
      console.log(`Sorry, we are out of`);
  }
}
function onObjectSelected() { 
  var node;
  // check if type is a property of active element
  console.log('canvas.getActiveObject()', canvas.getActiveObject())
  objType = (canvas.getActiveObject().type ? canvas.getActiveObject().type : "");
  switchDisplayFont(objType)
   console.log( canvas.getActiveObject().toSVG());
    console.log( canvas.getActiveObject().toClipPathSVG());
	console.log( canvas.toObject());
 canvas.getActiveObject().set("cornerStyle", "circle");
 canvas.getActiveObject().set("cornerColor", "#cbb495");
  canvas.getActiveObject().set("cornerSize", 8);
  myprop();
}

function onObjectCleared() { 
  var node;
  var elements = document.getElementsByClassName('item-panel');
  clear()
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('visible');
  }
}
function onObjectUpdated() { 
  var node;
  var elements = document.getElementsByClassName('item-panel');
  back()
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('visible');
  }
  // check if type is a property of active element
  objType = (canvas.getActiveObject().type ? canvas.getActiveObject().type : "");
  switchDisplayFont(objType)
}
canvas.on('selection:created', onObjectSelected);
canvas.on('selection:cleared', onObjectCleared);
canvas.on('selection:updated', onObjectUpdated);
radios5 = document.getElementsByName("fonttype");
for(var i = 0, max = radios5.length; i < max; i++) {
  radios5[i].onclick = function() {
    if(document.getElementById(this.id).checked == true) {
      if(this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "bold");
      }
      if(this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "italic");
      }
      if(this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "underline");
      }
    } else {
      if(this.id == "text-cmd-bold") {
        canvas.getActiveObject().set("fontWeight", "");
      }
      if(this.id == "text-cmd-italic") {
        canvas.getActiveObject().set("fontStyle", "");
      }  
      if(this.id == "text-cmd-underline") {
        canvas.getActiveObject().set("textDecoration", "");
      }
    }
    canvas.renderAll();
  }
}
document.getElementById('fill-color').onchange = function() {
  canvas.getActiveObject().set("fill", this.value);
  canvas.renderAll();
   updateModifications(true);
};
document.getElementById('fill2-color').onchange = function() {
  canvas.getActiveObject().set("stroke", this.value);
  canvas.renderAll();
   updateModifications(true);
};
/* i used this code eralier to change line stroke color along with div id='image2' but i use now above code and  div id='image'
document.getElementById('fill3-color').onchange = function() {
  canvas.getActiveObject().set("stroke", this.value);
  canvas.renderAll();
   updateModifications(true);
};
*/
document.getElementById('border-size').onchange = function() {
  canvas.getActiveObject().set("strokeWidth", parseFloat(this.value));
  canvas.renderAll();
   updateModifications(true);
};

//document.getElementById('text-color').onchange = function() {
 // canvas.getActiveObject().set("fill", this.value);
 // canvas.renderAll();
//};
document.getElementById('bckclr').onchange = function() {
  canvas.backgroundColor=this.value;
  canvas.renderAll();
   updateModifications(true);
};

document.getElementById('font-family').onchange = function() {
  canvas.getActiveObject().set("fontFamily", this.value);
  canvas.renderAll();
   updateModifications(true);
};

function clickColor() {
  let colorList = ["131313", "FFFFFF", "192F97", "D41C3B", "FF9090", "A92355", "E35110"]
  var general = document.getElementById('general-controls');
  general.classList.add("display");
  node = document.getElementById('color-controls');
  node.classList.add("display");
  listColor(colorList)
};
function back() {
  objType = (canvas.getActiveObject().type ? canvas.getActiveObject().type : "");
  switchDisplayFont(objType)
  var general = document.getElementById('general-controls');
  general.classList.remove("display");
  node = document.getElementById('color-controls');
  node.classList.remove("display");
}
function clear() {
  var general = document.getElementById('general-controls');
  general.classList.remove("display");
  node = document.getElementById('color-controls');
  node.classList.remove("display");
}

function listColor(src) {
  console.log(src)
  // Setup the HTML string
  var html = '';
  var currentColor = canvas.getActiveObject().fill
  // Loop through each color and create a list item
  src.forEach(function (item) {
    if('#'+item === currentColor) {
      html += '<div class="color-item active" id="'+ item +'" style="background-color:#'+ item +';" onclick="changeColor(\''+ item +'\')"></div>';
    } else {
      html += '<div class="color-item" id="'+ item +'" style="background-color:#'+ item +';" onclick="changeColor(\''+ item +'\')"></div>';
    }
    
  });

  document.querySelector('#color-list').innerHTML = html;
}
function changeColor(color) {
  elements = document.getElementsByClassName("color-item")
  for (var i = 0; i < elements.length; i++) {
   elements[i].classList.remove("active");
  }
  canvas.getActiveObject().set("fill", "#"+color);
  canvas.renderAll();
   updateModifications(true);
  var node = document.getElementById(color);
  node.classList.add("active")
}

function sendMessage() {
  window.parent.postMessage("To page code", "http://localhost");
}


   

var state = [];
var mods = 0;
canvas.on(
    'object:modified', function () {
    updateModifications(true);
},
    'object:added', function () {
    updateModifications(true);
});
function updateModifications(savehistory) {
    if (savehistory === true) {
        myjson = JSON.stringify(canvas);
        state.push(myjson);
    }
}
 undo=function undo() {
    if (mods < state.length) {
        canvas.clear().renderAll();
        canvas.loadFromJSON(state[state.length - 1 - mods - 1]);
        canvas.renderAll();
        //console.log("geladen " + (state.length-1-mods-1));
        //console.log("state " + state.length);
        mods += 1;
        //console.log("mods " + mods);
    }
}
 redo=function redo() {
    if (mods > 0) {
        canvas.clear().renderAll();
        canvas.loadFromJSON(state[state.length - 1 - mods + 1]);
        canvas.renderAll();
        //console.log("geladen " + (state.length-1-mods+1));
        mods -= 1;
        //console.log("state " + state.length);
        //console.log("mods " + mods);
    }
}

function poly(){
var startPoint = new fabric.Point(0, 0);

var polygonPoints = [];
var lines = [];
var isDrawing = false;

//

  if (isDrawing) {
  	finalize();    
  }
  else {
    isDrawing = true;
  }


//
fabric.util.addListener(window, "dblclick", function () { 
  if (isDrawing) {
  	finalize();    
  }
});

//
fabric.util.addListener(window, "keyup", function (evt) { 
  if (evt.which === 13 && isDrawing) {
  	finalize();    
  }
});

canvas.on('mouse:down', function (evt) {
  if (isDrawing) {
    var _mouse = this.getPointer(evt.e);    
    var _x = _mouse.x;
    var _y = _mouse.y;
    var line = new fabric.Line([_x, _y, _x, _y], {
      strokeWidth: 1,
      selectable: false,
      stroke: 'red'
    });

    polygonPoints.push(new fabric.Point(_x, _y));
    lines.push(line);
    
    this.add(line);
    this.selection = false;
  }
});
    
canvas.on('mouse:move', function (evt) {
  if (lines.length && isDrawing) {  
  	var _mouse = this.getPointer(evt.e);    
    lines[lines.length-1].set({
      x2: _mouse.x,
      y2: _mouse.y
    }).setCoords();
    this.renderAll();
  }
});

//
function finalize () {
	isDrawing = false;

  lines.forEach(function (line) {
    canvas.remove(line);
  });

  canvas.add(makePolygon()).renderAll();
  canvas.selection = true;
  lines.length = 0;
  polygonPoints.length = 0;
}

//

function makePolygon () {

  var left = fabric.util.array.min(polygonPoints, "x");
  var top = fabric.util.array.min(polygonPoints, "y");

  polygonPoints.push(new fabric.Point(polygonPoints[0].x, polygonPoints[0].y));

  return new fabric.Polygon(polygonPoints.slice(), {
    left: left,
    top: top,
    //fill: 'rgba(255,0,0,.5)',
	fill: ' #2977ef  ',
    stroke: 'black'
  });
}	
}



document.onkeydown = function(e) {
	




    switch (e.keyCode) {
      case 38: 
          if(canvas.getActiveObject()){
            canvas.getActiveObject().top -= 5;
            canvas.renderAll();
          }
        break;
      case 40:  
          if(canvas.getActiveObject()){
            canvas.getActiveObject().top += 5;
            canvas.renderAll(); 
          }
        break;
      case 37: 
          if(canvas.getActiveObject()){
            canvas.getActiveObject().left -= 5; 
            canvas.renderAll();
          }
        break;
      case 39: 
          if(canvas.getActiveObject()){
            canvas.getActiveObject().left += 5; 
            canvas.renderAll();
          }
        break;
      case 46: 
          if(canvas.getActiveObject()){
			  var obj= canvas.getActiveObject();
           // canvas.getActiveObject().remove(); 
		   canvas.remove(obj);
          }
        break;

    }
	//e.preventDefault();// this will stop page from scrolling up and down while arrow keys are pressed 
  
  }

 function create()
{
    window.location = 'comm-mapping.html';
}

function myprop(){
var myTable = document.getElementById('prop');
var myprop = canvas.getActiveObject();
prop.rows[0].cells[1].innerHTML = myprop.get('type');
prop.rows[1].cells[1].style.backgroundColor= myprop.get('fill');
prop.rows[2].cells[1].innerHTML = myprop.get('id');
prop.rows[3].cells[1].innerHTML = myprop.get('dir');
prop.rows[4].cells[1].style.backgroundColor = myprop.get('oncolor');
prop.rows[5].cells[1].style.backgroundColor=myprop.get('offcolor');
prop.rows[6].cells[1].innerHTML=myprop.get('tagscript');
prop.rows[7].cells[1].innerHTML=myprop.get('scriptag');
}

function myprop2(){
var myTable = document.getElementById('prop2');
var myprop = canvas.getActiveObject();
prop2.rows[0].cells[1].innerHTML = myprop.get('type');
prop2.rows[1].cells[1].innerHTML = myprop.get('id');
prop2.rows[2].cells[1].innerHTML = myprop.get('dir');

}