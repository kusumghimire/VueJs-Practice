Vue.component('greeting',{
  template:'<p>Hey there, I am a re-usable component </p>'.
  data:function(){
    return{
      name :'Pooza'
    }
  },
  methods:{
    changeName:function()
  }

});
new Vue({
  el: '#vue-app-one'
  // data:{
  //   name
  // }
 
});

new Vue({
  el: '#vue-app-two'
});


