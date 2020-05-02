new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function () {
    //     console.log('addToA');
    //     return this.a + this.age;//every time value changes then vue js from index.html (addToW)
    // },
    // addToB: function () {
    //     console.log('addToB');
    //     return this.b + this.age;
    // }
  },
  //these are same as that of methods except parameter are not used here , always  better to use computed  because 
  //vue js doesn't know which function to run in methods while computed can run the specific functions
  computed: {
    addToA: function () {
      console.log('addToA');
      return this.a + this.age;//every time value changes then vue js from index.html (addToW)
    },
    addToB: function () {
      console.log('addToB');
      return this.b + this.age;
    }
  }

});

