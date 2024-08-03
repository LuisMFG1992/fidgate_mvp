import Logo from '../assets/Logo.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  return (
    <div className='w-full h-full lg:grid lg:grid-cols-2 max-w-[1920px]'>
      {/* Form */}
      <div className='flex items-center justify-center h-full'>
        <div className='grid w-[400px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-4xl font-bold text-primaryColor'>
              Getting Started is Easy
            </h1>
            <p className='text-balance text-muted-foreground'>
              Enter your email below to login to your account
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a
                  href='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  Forgot your password?
                </a>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full bg-primaryColor'>
              Login
            </Button>
          </div>
          <div className='mt-2 text-center text-sm'>
            Don{"'"}t have an account?{' '}
            <a href='#' className='underline'>
              Schedule a DEMO
            </a>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className='hidden lg:flex justify-center items-center bg-primaryColor'>
        <img src={Logo} alt='logo' className='size-[600px]' />
      </div>
    </div>
  )
}
