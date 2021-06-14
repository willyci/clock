<template>
    <base-layout page-title="couesr check in out" page-default-back-link="/memories">
        <h2>Student Attendance</h2>
        <h2>Class Name (ID)</h2>
        <h2>{{currentDate}}</h2>
        <h2>( timeStart - timeEnd )</h2>
        <h2>Time In</h2>
        <input type="text" value="9:00AM" />
        <h2>Time Out</h2>
        <input type="text" value="10:00AM" /><br/>
        <button>Submit</button>
    </base-layout>
</template>

<script>
//import { IonList, IonItem } from '@ionic/vue';


export default {
    data(){
        return {
            currentDate: ''
        }
    },

    methods:{
        getTodayDate(){
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return today;
        }
    },
    mounted: function () {
      //update table display onload
      
      this.currentDate =this.getTodayDate();//  mm + '/' + dd + '/' + yyyy;   
      console.log("today is = "+this.currentDate);
}
}
</script>

