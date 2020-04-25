import Header from "../header/Header.vue";
import SecondaryHeader from '../secondaryHeader/SecondaryHeader.vue'
import {Component, Vue} from "vue-property-decorator";
import {mapState} from "vuex";
@Component({
    components: {
        Header,
        SecondaryHeader
    }

})
export default class Home extends Vue {

}
