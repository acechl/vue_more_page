<template>
  <div class="index1">
    <router-link to="/index2">点击进入index2组件</router-link>
    <ul>
        <li 
            @click=change(item.name)
            v-for="item in names" 
            v-bind:class="{'red':item.color}">
            {{item.name}}{{item.color}}
        </li>
    </ul>
    <div>{{name}}</div>
  </div>
</template>
<script>
import Vue from "vue";
import {hub} from "../js/common.js"
    export default {
        name: "index1",
        data () {
            return {
            }
        },
    }
</script>
<style>
    .red {
        color: red;
    }
</style>
