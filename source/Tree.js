/**
 * Created by Dima on 29.11.2020.
 */
class Node {
    constructor(value, text) {
        this.value = value;
        this.text = text;
        this.left = undefined;
        this.right = undefined;
    }

}

class Tree {
    constructor() {
        this.root = new Node(1,1);
        this.current_node = this.root;

    }

    create_tree(){
        this.create_node(this.root,0, questions[0]);
        this.create_node(this.root,1, questions[1], 'right');

    }


    static create_node(prev_root, value, text, positions='left'){
        if (positions!=='left'){
            prev_root.right = new Node(value,text);
        }
        else{
            prev_root.left =  new Node(value,text);
        }
    }
    static add_link(prev_root, target_root,positions='left'){
        if (positions!=='left'){
            prev_root.right = target_root;
        }
        else{
            prev_root.left =  target_root;
        }
    }
}