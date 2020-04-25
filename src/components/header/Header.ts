import { Component, Prop, Vue } from 'vue-property-decorator';
import {mapActions, mapState} from "vuex";

@Component({
    computed: {
        ...mapState('football', ['betSlipCount'])
    }

})
export default class HelloWorld extends Vue {




}
