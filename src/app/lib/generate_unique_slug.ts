import slugify from "slugify";
import { PrismaClient } from '../../../generated/prisma/client'

const prisma = new PrismaClient();

export async function generateUniqueSlug(title:string, check_unique:boolean){
    //make slug
    let baseSlug = slugify(title, {lower:true});
    const separator = "-"
    let suffix = 1;
    let combSlug = baseSlug //combined slug
    let existingSlug: string | null = baseSlug

    //query db to check for uniqueness
    if (check_unique) {
        const found = await prisma.post.findUnique({
            //only select slug field, and check against the baseslug
            where: {slug: baseSlug},
            select:{slug: true}
        });
        existingSlug = found ? found.slug : null;
    }

    // If the base slug is taken, log this initial state
    console.log("Initial existingSlug:", existingSlug);


    //if not unique, append a number (0..1...)
    while (existingSlug !== null) {
        combSlug = baseSlug + separator + suffix
        console.log(`Trying slug [${combSlug}] with suffix ${suffix}`);
        suffix += 1

        const found = await prisma.post.findUnique({
            //only select slug field, and check against the baseslug
            where: {slug: combSlug},
            select:{slug: true}
        });
        existingSlug = found ? found.slug : null;
        console.log("existingSlug:", existingSlug);
        }

    //if unique, return the slug
    console.log("Unique slug found:", combSlug);
    return combSlug;
}


// generateUniqueSlug('testpost1')

