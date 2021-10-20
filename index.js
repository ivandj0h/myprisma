const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // const allUsers = await prisma.user.findMany()
    // console.log(allUsers)

    // await prisma.user.create({
    //     data: {
    //         name: 'Ivandi',
    //         email: 'ivandi@ivandi.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })

    // const post = await prisma.post.update({
    //     where: { id: 1 },
    //     data: { published: true },
    // })
    // console.log(post)

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true,
    //     },
    // })

    const userById = await prisma.user.findUnique({
        where: {
            id: 4
        }
    })
    // console.dir(allUsers, { depth: null })
    console.dir(userById, { depth: null })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })