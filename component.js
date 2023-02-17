AFRAME.registerComponent('scenelistener',{
   init:function(){
      let vrcam = document.querySelector("#cameraRig");
      let dcam = document.querySelector("#cam-desktop");
      console.clear();
      console.log('init');
      console.log('vrcam:');
      console.log(vrcam);
      console.log('dcam:');
      console.log(dcam);
      this.el.sceneEl.addEventListener('enter-vr',function(){
               dcam.setAttribute('camera','active',false);
               vrcam.setAttribute('camera','active',true);
      });
      this.el.sceneEl.addEventListener('exit-vr',function(){
               dcam.setAttribute('camera','active',true);
               dcam.setAttribute('position', 0, 0, 0)
               vrcam.setAttribute('camera','active',false);
      });
  }
});

