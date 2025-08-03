import { PageWrapper, Text } from '@/shared/UI';
import { Accordion } from '@/shared/UI/Accordion';
import { ProfileSettings } from '@/widgets/ProfileSettings';
import { RestaurantList } from '@/widgets/RestaurantList/ui/RestaurantList';

const ProfilePage = () => {
  return (
    <PageWrapper>
      <Text size="xl">Настройки профиля</Text>
      <Accordion title="Список ресторанов">
        <RestaurantList />
      </Accordion>
      <Accordion title="Управление аккаунтом">
        <ProfileSettings />
      </Accordion>
    </PageWrapper>
  );
};

export default ProfilePage;
