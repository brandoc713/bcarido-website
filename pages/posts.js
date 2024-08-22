import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thePHI from '../public/images/posts/coron.jpg'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="The Philippines Trip" thumbnail={thePHI} href="https://samandkelsadventures.com/asia/philippines/"/>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts