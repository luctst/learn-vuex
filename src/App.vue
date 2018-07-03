<template>
<main>
<app-header></app-header>
<section class="container server--info mt-2 mb-2">
    <div class="row">
    <app-server-info></app-server-info>
    <app-server-detail></app-server-detail>
    </div>
</section>
<section class="container user--component mt-2 mb-2">
    <div class="row">
        <app-user-component></app-user-component>
    </div>
</section>
<section class="container quote mt-2 mb-2">
    <app-quote>
        <p class="text-center">This is a citation, very good</p>
    </app-quote>
</section>
<section class="container mt-2 mb-2">
    <div class="row">
        <div class="col-12">
            <button class="btn btn-danger" @click="selectedComponent = 'app-red-component'">Display red component</button>
            <button class="btn btn-info" @click="selectedComponent = 'app-blue-component'">Display blue component</button>
            <button class="btn btn-success" @click="selectedComponent = 'app-green-component'">Display green component</button>
        </div>
        <div class="col-12">
            <keep-alive>
                <component :is="selectedComponent"></component>
            </keep-alive>
        </div>
    </div>
</section>
</main>
</template>

<script>
import Home from './components/header/Header'
import ServerInfo from './components/server/ServerInfo'
import ServerDetails from './components/server/ServerDetails'
import UserComponent from './components/user/UserComponent'
import Quote from './components/quote/Quote'
import RedComponent from './components/dynamic-component/RedComponent'
import BlueComponent from './components/dynamic-component/BlueComponent'
import GreenComponent from './components/dynamic-component/GreenComponent'

export default {
    data() {
        return {
            selectedComponent: "app-red-component"
        }
    },
    components: {
        "app-header": Home,
        "app-server-info": ServerInfo,
        "app-server-detail": ServerDetails,
        "app-user-component": UserComponent,
        "app-quote": Quote,
        "app-red-component": RedComponent,
        "app-blue-component": BlueComponent,
        "app-green-component": GreenComponent
    }
}
</script>

<style scoped>
p {
    color: red;
}
</style>

