"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactFormData } from "@/Types/type";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().nonempty({ message: "Subject is required" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const Contact = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;  
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 

  const form = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const formSubmit = (data: contactFormData) => {
    console.log("form submitted", data);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        `${serviceId}`,
        `${templateId}`,
        formRef.current,
        `${publicKey}`
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!");
          reset(); // Clear form on success
        },
        (error) => {
            toast.error("Failed to send message. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="p-5 lg:py-20 app-width">
      <Card className="lg:max-w-[500px] lg:mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Get in touch</CardTitle>
          <CardDescription className="text-center mt-2 text-gray-600">
            Let&apos;s connect! I&apos;m available for freelance work,
            collaborations, or tech talks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form ref={formRef} onSubmit={handleSubmit(formSubmit)}>
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your subject"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="shadow-none focus:!ring-blue-300 min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-center mt-10">
                <Button type="submit" className="w-40 rounded-md">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
