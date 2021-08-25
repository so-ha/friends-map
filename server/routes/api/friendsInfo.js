const express = require("express");
const router = express.Router();

//load user model
const User = require("../../models/User");
//load friends model
const Friends = require("../../models/Friends");

//@route POST dashboard/friends
//@desc Find friends of the users
//@access Public
router.post("/friends", (req, res) => {
    let { email } = req.body.email;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }
        //find friends
        let {id} = user.id;
        console.log("id",id, typeof id );
        // User.aggregate([
        //   {
        //     $lookup: {
        //       from: Friend.collection.name,
        //       let: { friends: "$friends" },
        //       pipeline: [
        //         {
        //           $match: {
        //             recipient: mongoose.Types.ObjectId(
        //               "5afaab572c4ec049aeb0bcba"
        //             ),
        //             $expr: { $in: ["$_id", "$$friends"] },
        //           },
        //         },
        //         { $project: { status: 1 } },
        //       ],
        //       as: "friends",
        //     },
        //   },
        //   {
        //     $addFields: {
        //       friendsStatus: {
        //         $ifNull: [{ $min: "$friends.status" }, 0],
        //       },
        //     },
        //   },
        // ]);
      })
      .catch((err) => console.log("Error getting friends"));
  });

  module.exports = router;