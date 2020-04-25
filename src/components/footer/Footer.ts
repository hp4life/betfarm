import { Component, Prop, Vue } from 'vue-property-decorator';
import {mapState} from "vuex";

@Component({
    computed: {
        ...mapState('football', ['betSlipCount'])
    }

})
export default class Footer extends Vue {

}
