/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const arr = []
    const postOrder = ((root) =>{
        if(root == undefined)
            return
        for(let child of root.children)
            postOrder(child)
        
        arr.push(root.val)
    })
    
    postOrder(root)
    return arr
};