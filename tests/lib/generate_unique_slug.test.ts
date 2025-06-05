import {generateUniqueSlug} from '../../src/app/lib/generate_unique_slug';
import { prismaMock } from '../../singleton_mock_prisma_client';

describe('generateUniqueSlug', () => {
    beforeEach(() => {
        //Clear previous mock calls and results
        prismaMock.post.findUnique.mockReset();
    });

    test('should return the base slug if it is unique', async () => {
        prismaMock.post.findUnique.mockResolvedValue(null);

        const slug = await generateUniqueSlug('Test Title');
        expect(slug).toBe('test-title');
    });


    test('should append a suffix if the base slug is taken', async () => {
        prismaMock.post.findUnique.
        mockResolvedValueOnce({
                content: "Test content",
                title: "test title",
                slug: "test-title",
                published: true,
                author: { connect: { id: "1" } }
            } as any).
        mockResolvedValueOnce(null);

        //checks that base slug is taken already
        let slug = await generateUniqueSlug('Test title');
        expect(slug).toBe('test-title-1');

        // slug = await generateUniqueSlug('Test title')
        // expect(slug).toBe('test-title-1');
    });


    test('should increment suffix until a unique slug is found', async () => {});

    test('should handle titles with special characters', async () => {});

});

