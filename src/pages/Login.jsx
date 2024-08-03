import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  return (
    <div className='w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center h-full'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold text-primaryColor'>
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
          <div className='mt-4 text-center text-sm'>
            Don{"'"}t have an account?{' '}
            <a href='#' className='underline'>
              Schedule a DEMO
            </a>
          </div>
        </div>
      </div>
      <div className='hidden lg:block bg-primaryColor'></div>
    </div>
  )
}
