class DynamicArray {
    /**
     * @constructor
     * @param {number} _capacity
     */
    constructor(capacity) {
        
        this.capacity = capacity;
        this.length = 0;
        this.arr = new Array(this.capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
   
    get(i) {
        
        return this.arr[i];
    }

    
    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    
    set(i, n) {
        
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        
        if (this.length === this.capacity) {
            this.resize();
        }

        this.arr[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback() {
        
        let l = this.arr[this.length - 1];
        if (this.length > 0) {
            this.length--;
        }
        return l;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = 2 * this.capacity;
        const newArr = new Array(this.capacity);

        for (let i = 0; i < this.length; i++) {
            newArr[i] = this.arr[i];
        }
        this.arr = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
