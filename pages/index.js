import NextLink from 'next/link'
import { 
	Button,
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue, 
	Link
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'
import Layout from '../components/layouts/article.js'

const Page = () => {
    return (
	<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.200')} p={3} mb={6} align="center">
			Hello, my name is Brandon Carido I&apos;m currently a 3rd Year college student pursuing the Dartmouth Engineering&apos;s Partner School Dual-Degree Program.
			</Box>

			<Box display={{ md: 'flex'}}>
				<Box flexGrow={1}>
				<Heading as="h2" variant="page-title">
					Brandon Carido
				</Heading>
				<p> Full-Time Student ( Builder / Perpetual Learner / StrataScratch Specialist ) </p>
				</Box>
				<Box 
					flexShrink={0} 
					mt={{base: 4, md: 0}} 
					ml={{md: 6}} 
					align="center"
				>
					<Image 
						borderColor="whiteAlpha.800" 
						borderWidth={2} 
						borderStyle="solid" 
						maxWidth="150px" 
						display="incline-block" 
						borderRadius="full" 
						src="/images/GenericPFP2024.jpeg" 
						alt="Profile Image"
					/>
				</Box>
			</Box>

		<Section delay={0.1}>
			<Heading as="h3" variant="section-title">
				Work
			</Heading>
			<Paragraph>Paragraph Filler
			</Paragraph>
			<Box align="center" my={4}>
				<NextLink href="/works">
				<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
					My Resume
				</Button>
				</NextLink>
			</Box>
		</Section>
		<Section delay={0.2}>
			<Heading as="h3" variant="section-title" >
				Bio
			</Heading>
			<BioSection>
				<BioYear>2003</BioYear>
				Born in Chicago, IL.
			</BioSection>
			<BioSection>
				<BioYear>2021</BioYear>
				Graduated from Vernon Hills High School.
				<br></br>Enrolled at Vassar College, NY for a Computer Science Degree.
			</BioSection>
			<BioSection>
				<BioYear>2023</BioYear>
				Enrolled at Dartmouth College, NH to pursue an Electrical Engineering Degree.
			</BioSection>
			<BioSection>
				<BioYear>2025</BioYear>
				Graduate from Vassar College.
			</BioSection>
			<BioSection>
				<BioYear>2026</BioYear>
				Graduate from Dartmouth College.
			</BioSection>
		</Section>
		<Section delay={.3}>
			<Heading as="h3" variant="section-title">
				My Passions
			</Heading>
			<Paragraph>
				Basketball(NBA), Music(Drums+Piano), Esports(Call of Duty + Valorant), Journaling, Reading
			</Paragraph>
		</Section>
		</Container>
	</Layout>
    )
}

export default Page
