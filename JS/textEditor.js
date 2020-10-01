'use strict';

(function(){

  if (localStorage['lastEdit']){
    document.querySelector('.container').innerHTML = localStorage['lastEdit'];
  } else { save() };

  let btnSave = document.querySelector('.save');
  let btnNosave = document.querySelector('.nosave');
  
  function save(){
    let textEdit = document.querySelector('.container').innerHTML;
    localStorage.setItem('lastEdit', textEdit);
  }

  btnSave.addEventListener('click', save );
  

  btnNosave.addEventListener('click', function(){
    document.querySelector('.container').innerHTML = localStorage['lastEdit'];
  }) 

  document
    .querySelector('.btn_container')
    .addEventListener('click', function(ev){
      let btn = document.querySelectorAll('button');
      let edit = document.querySelector('.container').contentEditable

      if (ev.target.tagName === 'BUTTON'){
        if( edit === "false"){
          document.querySelector('.container').contentEditable = true;
        } else {
          document.querySelector('.container').contentEditable = false;
        };
        for (let i = 0; i < btn.length; i++){
          btn[i].classList.toggle('active');
          btn[i].disabled = !btn[i].disabled;
        }
      }
  })
})()