'use client'

import * as z from "zod"
import Heading from '@/components/heading'
import { MessageSquare } from 'lucide-react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { formSchema } from "./constants"
import { Form } from "@/components/ui/form"

const ConversationPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({

        resolver: zodResolver(formSchema),

        defaultValues: {
            prompt: ""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
    }

  return (
    <div>
      <Heading 
        title='Chat-Bot'
        description='Our most advance powerful AI Chatbot'
        icon={MessageSquare}
        iconColor='text-sky-500'
        bgColor='bg-sky-500/10'
      />

      <div className="px-4 lg:px-8">
            <div>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="
                            rounded-lg 
                            border 
                            w-full 
                            p-4 
                            px-3 
                            md:px-6 
                            focus-within:shadow-sm
                            grid
                            grid-cols-12
                            gap-2
                        "
                    >
                    </form>
                </Form>
            </div>
      </div>


    </div>
  )
}

export default ConversationPage
