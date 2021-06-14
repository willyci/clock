<template>
    <base-layout page-title="list">
    <h2>Class Schedule</h2>
    <h1>Today</h1>
    <h2>{{currentDate}}</h2>
    <ion-list>
        <ion-item 
            v-for="memory in memories" 
            :key="memory.id"
            :router-link="`/memories/${memory.id}`"
            >
            {{memory.ClassTitle}} - start at {{memory.timeIn}}
            </ion-item>
    </ion-list>
    </base-layout>
</template>
<script>
import { IonList, IonItem } from '@ionic/vue';


export default {
    components:{
        IonList, IonItem
    },
    data() {
        return {
            memories:[
                {id:1, classID:'1234', ClassTitle:'Med class 1234',date:'Mon May 24, 2021', timeIn:'9:00 AM', timeOut:'10:00AM'},
                {id:2, classID:'534', ClassTitle:'History class 534',date:'Mon May 24, 2021', timeIn:'11:00 AM', timeOut:'12:00PM'},                
                {id:3, classID:'134', ClassTitle:'Physics class 134',date:'Mon May 24, 2021', timeIn:'2:00 PM', timeOut:'3:00PM'},                
                {id:4, classID:'341', ClassTitle:'Math class 341',date:'Mon May 24, 2021', timeIn:'4:00 PM', timeOut:'5:00PM'}
            ],
            currentDate :''
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
