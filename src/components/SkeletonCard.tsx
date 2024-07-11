import { Box, SkeletonText } from "@chakra-ui/react"

const SkeletonCard = () => {
  return (
    <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonText mt='1' noOfLines={1} spacing='4' skeletonHeight='180' />
        <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
    </Box>
  )
}

export default SkeletonCard