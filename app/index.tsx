import Gradient from '@/assets/Icons/Gradient';
import DocumentData from '@/assets/Icons/DocumentData';
import LightBulbPerson from '@/assets/Icons/LightbulbPerson';
import Rocket from '@/assets/Icons/Rocket';
import Logo from '@/assets/Icons/Logo';
import { Box } from '@/components/ui/box';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';

import { Link } from 'expo-router';

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      className="flex-column border-w-1 m-2 rounded border border-outline-700 p-4 md:flex-1"
      key={name}>
      <Box className="flex flex-row items-center">
        <Text>
          <IconSvg />
        </Text>
        <Text className="ml-2 text-xl font-medium text-typography-white">{name}</Text>
      </Box>
      <Text className="mt-2 text-typography-400">{desc}</Text>
    </Box>
  );
};

export default function Home() {
  return (
    <Box className="h-[100vh] flex-1 bg-black">
      <ScrollView style={{ height: '100%' }} contentContainerStyle={{ flexGrow: 1 }}>
        <Box className="absolute h-[500px] w-[500px] lg:h-[700px] lg:w-[700px]">
          <Gradient />
        </Box>
        <Box className="mx-5 my-16 flex flex-1 items-center lg:mx-32 lg:my-24">
          <Link href="/tabs/">
            <Box className="bg-background-template flex-column items-center rounded-full px-6 py-2 sm:flex-row md:self-start">
              <Text className="font-normal text-typography-white">Explore Tab Navigation</Text>
            </Box>
          </Link>
        </Box>
      </ScrollView>
    </Box>
  );
}
