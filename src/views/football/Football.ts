import { Component, Vue } from 'vue-property-decorator';
import {mapActions, mapState} from 'vuex'


@Component({
    computed: {
        ...mapState('football', ['footballData'])
    },
    methods: {
        ...mapActions('football',[
            'getFootball', 'getIncrement', 'getDecrement'
        ])
    }
})
export default class Football extends Vue {
    public  footballData: any;
    public getFootball: Function;
    public getIncrement: Function;
    public getDecrement: Function;
    isClick1Col1 = false;
    isClick2Col1 = false;
    isClick3Col1 = false;
    isClick1Col2 = false;
    isClick2Col2 = false;
    isClick3Col2 = false;
    isClick1Col3 = false;
    isClick2Col3 = false;
    isClick3Col3 = false;
    colIncrementCount = 0;
    col1Clicked = false;
    col2Clicked = false;
    col3Clicked = false;

    mounted() {
        this.getFootball();
    }

    selected(col, id) {
        if(col == 1) {
            if(id === 1) {
                this.isClick1Col1= ! this.isClick1Col1;
                this.isClick2Col1= false;
                this.isClick3Col1= false;
                this.colOneIdOne();
            } else if (id ===2 ) {
                this.isClick1Col1= false;
                this.isClick2Col1= !this.isClick2Col1;
                this.isClick3Col1= false;
                this.colOneIdTwo();
            } else {
                this.isClick1Col1= false;
                this.isClick2Col1= false;
                this.isClick3Col1= !this.isClick3Col1;
                this.colOneIdThree();
            }

        } else if (col === 2) {
            if (id === 1) {
                this.isClick1Col2= ! this.isClick1Col2;
                this.isClick2Col2= false;
                this.isClick3Col2= false;
                this.colTwoIdOne();
            } else if (id ===2 ) {
                this.isClick1Col2= false;
                this.isClick2Col2= !this.isClick2Col2;
                this.isClick3Col2= false;
                this.colTwoIdTwo();
            } else {
                this.isClick1Col2= false;
                this.isClick2Col2= false;
                this.isClick3Col2= !this.isClick3Col2;
                this.colTwoIdThree();
            }
        } else {
            if (id === 1) {
                this.isClick1Col3= ! this.isClick1Col3;
                this.isClick2Col3= false;
                this.isClick3Col3= false;
                this.colThreeIdOne();
            } else if (id ===2 ) {
                this.isClick1Col3= false;
                this.isClick2Col3= !this.isClick2Col3;
                this.isClick3Col3= false;
                this.colThreeIdTwo();
            } else {
                this.isClick1Col3= false;
                this.isClick2Col3= false;
                this.isClick3Col3= !this.isClick3Col3;
                this.colThreeIdThree();
            }

        }
    }

    checkIncrement() {
        if(this.colIncrementCount === 1) {
            this.getIncrement();
        }
    }

    colOneIdOne() {
        if(this.col1Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col1Clicked = true;
        }
        if (this.isClick1Col1=== false) {
            this.getDecrement();
            this.col1Clicked = false;
        }
    }

    colOneIdTwo() {
        if(this.col1Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col1Clicked = true;
        }
        if (this.isClick2Col1=== false) {
            this.getDecrement();
            this.col1Clicked = false;
        }
    }

    colOneIdThree() {
        if(this.col1Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col1Clicked = true;
        }
        if (this.isClick3Col1=== false) {
            this.getDecrement();
            this.col1Clicked = false;
        }
    }

    colTwoIdOne() {
        if(this.col2Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col2Clicked = true;
        }
        if (this.isClick1Col2=== false) {
            this.getDecrement();
            this.col2Clicked = false;
        }
    }

    colTwoIdTwo() {
        if(this.col2Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col2Clicked = true;
        }
        if (this.isClick2Col2=== false) {
            this.getDecrement();
            this.col2Clicked = false;
        }
    }

    colTwoIdThree() {
        if(this.col2Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col2Clicked = true;
        }
        if (this.isClick3Col2=== false) {
            this.getDecrement();
            this.col2Clicked = false;
        }
    }

    colThreeIdOne() {
        if(this.col3Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col3Clicked = true;
        }
        if (this.isClick1Col3=== false) {
            this.getDecrement();
            this.col3Clicked = false;
        }
    }

    colThreeIdTwo() {
        if(this.col3Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col3Clicked = true;
        }
        if (this.isClick2Col3=== false) {
            this.getDecrement();
            this.col3Clicked = false;
        }
    }

    colThreeIdThree() {
        if(this.col3Clicked === false) {
            this.colIncrementCount = 1;
            this.checkIncrement();
            this.col3Clicked = true;
        }
        if (this.isClick3Col3=== false) {
            this.getDecrement();
            this.col3Clicked = false;
        }
    }
}
