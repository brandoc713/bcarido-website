import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article.js'

import thumbENGS32 from '../public/images/works/engs32FinalProjectEyeCatch.jpeg'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="engs32project" title="Analog Electronics Heart Monitor" thumbnail={thumbENGS32}>
                            An ENGS 32 Final Project.
                        </WorkGridItem>
                    </Section> 
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works