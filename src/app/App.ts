import Footer from "../components/footer/Footer.vue";
import CategoryNavigation from "@/components/categoryNavigation/CategoryNavigation.vue";
import {Component, Vue} from "vue-property-decorator";



@Component({
    components: {
        CategoryNavigation,
        Footer
    }

})
export default class App extends Vue {

}
