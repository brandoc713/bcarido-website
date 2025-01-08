import NextLink from 'next/link'
import { 
	Button,
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue, 
	Flex
} from '@chakra-ui/react'
import Section from '../components/section.js'
import Paragraph from '../components/paragraph.js'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio.js'
import Layout from '../components/layouts/article.js'
import MusicPlayer from '../components/musicPlayer.js'
import CountdownCircles from '../components/countdown.js'

const Page = () => {
    return (
		//Gradient Code
		<Box
			minHeight="100vh"  // Ensure full viewport height
			width="100vw"  // Ensure full viewport width
			bgGradient={useColorModeValue(
				"linear-gradient(to-b, rgba(207, 71, 89, 0.5), rgba(255, 228, 163, 0.8))",  // Light mode gradient with opacity
        		"linear-gradient(to-b, rgba(118, 123, 150, 0.5), rgba(198, 162, 255, 0.8))"   // Dark mode gradient with opacity
			  )}  // Gradient background
			p={4}  // Padding
			m={0}  // Remove margins
			position="absolute"  // Ensure it fills the viewport
			top={0}  // Align to top
			left={0}  // Align to left
      	>
        <Container maxWidth="100%" p={0} m={0}>
			<Layout>	
			<Flex direction={{ base: 'column', md: 'row' }} pt="50px">
				<Box flex="0.3" ml= {{ md: 6}}>
					<CountdownCircles />
				</Box>
				{/* Main Content */}
				<Box flex="1">
				<Container>
					<Box borderRadius="lg" bg={useColorModeValue('#C1E1C1', '#00693E')} p={3} mb={6} align="center">
					Hello, my name is Brandon Carido I&apos;m currently a 4th Year college student pursuing the Dartmouth Engineering&apos;s Partner School Dual-Degree Program.
					</Box>

					<Box display={{ md: 'flex'}}>
						<Box flexGrow={1}>
						<Heading as="h2" variant="page-title">
							Brandon Carido
						</Heading>
						<p> Full-Time Student (Builder / Perpetual Learner / Dreamer) </p>
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
						About Me
					</Heading>
					<Paragraph>
						I have always been interested in electronics from a young age. 
						During my younger years, I spent a lot of time on the computer, browsing the internet, and playing video games with family and friends. 
						I started developing my academic passions towards the second half of high school. With the support of great teachers and my own curiosity,
						I decided to pursue a field related to coding or physics. I decided to attend Vassar College in Poughkeepsie, NY, 
						with plans to join the Dartmouth Dual-Degree Engineering Program. Thus, I could get exposed to both of my interests during my time as an 
						undergraduate student.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My Resume
						</Button>
						</NextLink>
					</Box>
				</Section>
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						Currently
					</Heading>
					<Paragraph>
					During the 2023-2024 academic year, I completed a full year at Dartmouth College as an aspiring electrical engineer. 
					With the Fall 2024 term approaching, I&apos;ll begin my fourth year of college, 
					finishing my Computer Science degree and graduating from Vassar College with a Bachelor of Arts in Computer Science.
					</Paragraph>
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
						Basketball(NBA), Music — Drums, Music — Piano, Esports — Valorant, Esports — Call of Duty, Journaling, Reading
					</Paragraph>
				</Section>
				</Container>
				</Box>

				{/* Right Column Widgets */}
				<Box flex="0.3" ml= {{ md: 6}}>
					<MusicPlayer />
				</Box>
			</Flex>
		</Layout>
		</Container>
	</Box>
    )
}

export default Page
