import { GoogleIcon } from '../../assets/icons/GoogleIcon'
import { LogoIcon } from '../../assets/icons/LogoIcon'
import {
  AppContainer,
  Box,
  Button,
  Card,
  Container,
  Layout,
  Space,
  Text
} from '../../components'
import { Icon } from '../../components/icons/Icon'

export const LoginPage = () => {
  return (
    <AppContainer>
      <Layout height="full" justify="center">
        <Container items="center" gap="lg">
          <Space width="md" gap="sm">
            <Icon icon={LogoIcon} size="lg" />
            <Text.Title weight="bold">Kreattix Builder</Text.Title>
          </Space>
          <Card width="md" gap="lg">
            <Box>
              <Text.Subtitle>Welcome to Kreattix Builder</Text.Subtitle>
              <Text muted>Start creating amazing websites with just few clicks.</Text>
            </Box>
            <Button icon={GoogleIcon}>Continue with Google</Button>
            <Text muted>
              By continuing, you agree to our{' '}
              <Button type="plain" variant="primary">
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button type="plain" variant="primary">
                Privacy Policy
              </Button>
              .
            </Text>
          </Card>
        </Container>
      </Layout>
    </AppContainer>
  )
}
