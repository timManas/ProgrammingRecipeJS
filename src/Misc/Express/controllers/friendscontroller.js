import friends from '../models/friendsModel.js'

function postFriend(req, res) {
  const friendName = req.body.name
  if (!friendName) {
    return res.status(400).json({
      err: 'Friend Name cannot be null',
    })
  }

  const newFriend = {
    id: friends.length,
    nane: req.body.name,
  }

  friends.push(newFriend)
  res.json(newFriend)
}

function getFriends(req, res, next) {
  res.json(friends)
}

function getFriend(req, res, next) {
  const friendId = Number(req.params.friendId)
  const friend = friends[friendId]
  if (friend) {
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error: `friend does not exists ${friendId}`,
    })
  }
}

export { getFriends, getFriend, postFriend }
