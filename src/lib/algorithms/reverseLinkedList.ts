export interface ListNode {
    id: string;
    val: number;
    next: string | null; // ID of next node
}

export const reverseListSteps = (initialValues: number[]) => {
    const steps = [];

    // Create Nodes
    const nodes: Record<string, ListNode> = {};
    const ids = initialValues.map((v, i) => `node-${i}`);

    initialValues.forEach((val, i) => {
        nodes[ids[i]] = {
            id: ids[i],
            val: val,
            next: i < initialValues.length - 1 ? ids[i + 1] : null
        };
    });

    // Initial State
    steps.push({
        line: 1, // def reverseList
        data: JSON.parse(JSON.stringify(nodes)),
        pointers: { prev: null, curr: ids[0], head: ids[0] }
    });

    let prev: string | null = null;
    let curr: string | null = ids[0];

    // Simulation
    while (curr) {
        // Line 4: while curr
        steps.push({
            line: 4,
            data: JSON.parse(JSON.stringify(nodes)),
            pointers: { prev, curr, head: ids[0] } // head technically stays at start until return? Or visualizer assumes input head.
        });

        // Line 5: next_temp = curr.next
        const nextTemp: string | null = nodes[curr].next;
        steps.push({
            line: 5,
            data: JSON.parse(JSON.stringify(nodes)),
            pointers: { prev, curr, nextTemp }
        });

        // Line 6: curr.next = prev
        nodes[curr].next = prev;
        steps.push({
            line: 6,
            data: JSON.parse(JSON.stringify(nodes)), // Nodes update! Arrow flips.
            pointers: { prev, curr, nextTemp }
        });

        // Line 7: prev = curr
        prev = curr;
        steps.push({
            line: 7,
            data: JSON.parse(JSON.stringify(nodes)),
            pointers: { prev, curr, nextTemp }
        });

        // Line 8: curr = next_temp
        curr = nextTemp;
        steps.push({
            line: 8,
            data: JSON.parse(JSON.stringify(nodes)),
            pointers: { prev, curr }
        });
    }

    // Line 9: return prev
    steps.push({
        line: 9,
        data: JSON.parse(JSON.stringify(nodes)),
        pointers: { prev, curr: null, result: prev }
    });

    return { steps, ids }; // Return ids to help visualizer know initial order
};

export const reverseListCode = `def reverseList(head):
    prev = None
    curr = head
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    return prev`;
