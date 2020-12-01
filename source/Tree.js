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
        this.root = new Node('', '');
        this.current_node = this.root;
        this.search_result = '';
        this.create_tree();
        this.brightness = 50;
    }

    start_game(index) {
        if (!index) {
            this.current_node = this.root.left;
        }
        else {
            this.current_node = this.root.right;
        }
        set_brightness();
        set_new_questions(this.current_node.text);
    }

    create_tree() {
        //1 level
        this.create_node(this.root, 0, questions[0]);
        this.create_node(this.root, 1, questions[1], 'right');

        //2 level
        this.create_node(this.search_node(0), 2, questions[2]);
        this.create_node(this.search_node(0), 3, questions[3], 'right');

        this.create_node(this.search_node(1), 4, questions[4]);
        this.create_node(this.search_node(1), 5, questions[5], 'right');

        //3 level
        this.create_node(this.search_node(2), 6, questions[6]);
        this.add_link(this.search_node(2), this.search_node(6), 'right');

        this.create_node(this.search_node(3), 7, questions[7]);
        this.add_link(this.search_node(3), this.search_node(7), 'right');

        this.create_node(this.search_node(4), 8, questions[8]);
        this.add_link(this.search_node(4), this.search_node(8), 'right');

        this.create_node(this.search_node(5), 9, questions[9]);
        this.add_link(this.search_node(5), this.search_node(9), 'right');

        //4 level

        this.create_node(this.search_node(6), 10, questions[10]);
        this.create_node(this.search_node(6), 11, questions[11], 'right');

        this.create_node(this.search_node(7), 12, questions[12]);
        this.create_node(this.search_node(7), 13, questions[13], 'right');

        this.create_node(this.search_node(8), 14, questions[14]);
        this.create_node(this.search_node(8), 15, questions[15], 'right');

        this.create_node(this.search_node(9), 16, questions[16]);
        this.create_node(this.search_node(9), 17, questions[17], 'right');

        //5 level

        this.create_node(this.search_node(10), 18, questions[18]);
        this.add_link(this.search_node(10), this.search_node(18), 'right');

        this.create_node(this.search_node(11), 19, questions[19]);
        this.add_link(this.search_node(11), this.search_node(19), 'right');

        this.create_node(this.search_node(12), 20, questions[20]);
        this.add_link(this.search_node(12), this.search_node(20), 'right');

        this.create_node(this.search_node(13), 21, questions[21]);
        this.add_link(this.search_node(13), this.search_node(21), 'right');

        this.create_node(this.search_node(14), 22, questions[22]);
        this.add_link(this.search_node(14), this.search_node(22), 'right');

        this.create_node(this.search_node(15), 23, questions[23]);
        this.add_link(this.search_node(15), this.search_node(23), 'right');

        this.create_node(this.search_node(16), 24, questions[24]);
        this.add_link(this.search_node(16), this.search_node(24), 'right');

        this.create_node(this.search_node(17), 25, questions[25]);
        this.add_link(this.search_node(17), this.search_node(25), 'right');

        //6 level

        this.create_node(this.search_node(18), 26, questions[26]);
        this.create_node(this.search_node(18), 27, questions[27], 'right');

        this.create_node(this.search_node(19), 28, questions[28]);
        this.create_node(this.search_node(19), 29, questions[29], 'right');

        this.create_node(this.search_node(20), 30, questions[30]);
        this.create_node(this.search_node(20), 31, questions[31], 'right');

        this.create_node(this.search_node(21), 32, questions[32]);
        this.create_node(this.search_node(21), 33, questions[33], 'right');

        this.create_node(this.search_node(22), 34, questions[34]);
        this.create_node(this.search_node(22), 35, questions[35], 'right');

        this.create_node(this.search_node(23), 36, questions[36]);
        this.create_node(this.search_node(23), 37, questions[37], 'right');

        this.create_node(this.search_node(24), 38, questions[38]);
        this.create_node(this.search_node(24), 39, questions[39], 'right');

        this.create_node(this.search_node(25), 40, questions[40]);
        this.create_node(this.search_node(25), 41, questions[41], 'right');
    }

    search_node(value) {
        this.recur_search_node_(this.root, value);
        return this.search_result;
    }

    recur_search_node_(node, value) {
        if (node.value === value) {
            this.search_result = node;
        }
        else {
            if (node.left) {
                this.recur_search_node_(node.left, value, node);
            }
            if (node.right) {
                this.recur_search_node_(node.right, value, node);
            }
        }

    }

    declarate_answer(answ) {
        if (!this.current_node.left && !this.current_node.right) {
            alert('Игра окончена! Вы шизоид!');
        }
        else {
            if (!answ) {
                this.brightness -= 7;
                this.current_node = this.current_node.left;
            }
            else {
                this.brightness += 5;
                this.current_node = this.current_node.right;
            }
            set_brightness();
            set_new_questions(this.current_node.text);
        }
    }

    create_node(prev_root, value, text, positions = 'left') {
        if (positions !== 'left') {
            prev_root.right = new Node(value, text);
        }
        else {
            prev_root.left = new Node(value, text);
        }
    }

    add_link(prev_root, target_root, positions = 'left') {
        if (positions !== 'left') {
            prev_root.right = target_root;
        }
        else {
            prev_root.left = target_root;
        }
    }
}