//we need to mention labels for our APIs

//@desc - Get all children
//@route - GET /api/children
//@access public
const getChildren = (req, res) => {
    res.status(200).send('get all children');
}

//@desc - Get one children
//@route - GET /api/children/:id
//@access public
const getChild = (req, res) => {
    res.status(200).send(`get child based on id ${req.params.id}`);
}

//@desc - Add child
//@route - POST /api/children
//@access public
const addChildren = (req, res) => {
    res.status(200).send('add a child');
}

//@desc - update a child
//@route - PUT /api/children/:id
//@access public
const updateChild = (req, res) => {
    res.status(200).send(`update a child based on id ${req.params.id}`);
}

//@desc - delete a child
//@route - DELETE /api/children/:id
//@access public
const deleteChild = (req, res) => {
    res.status(200).send(`delete a child with id - ${req.params.id}`);
}

module.exports = { 
    getChildren, 
    getChild, 
    addChildren,
    updateChild,
    deleteChild
 }