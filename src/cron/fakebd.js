import cron from 'node-cron'

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'active',
    membershipExpires: '2026-11-15',
  },
  {
    id: 2,
    name: 'Bob Williams',
    email: 'bob@gmail.com',
    status: 'inactive',
    membershipExpires: '2026-11-20',
  },
  {
    id: 3,
    name: 'Shannon Jackson',
    email: 'shannon@gmail.com',
    status: 'active',
    membershipExpires: '2026-11-10',
  },
]

const comprobar = members => {
  members.forEach(member => {
    new Date(member.membershipExpires) > new Date()
      ? (member.status = 'active')
      : (member.status = 'inactive')
  })

  return members
}

console.log(comprobar(members))

cron.schedule('* * * * *', () => {
  comprobar(members)
})
