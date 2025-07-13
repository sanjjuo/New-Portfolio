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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormData } from "@/Types/type";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const contactSchema = z.object({
    name: z.string().nonempty({ message: "Name is required" }),
    email: z.email({ message: "Please enter a valid email address" }),
    subject: z.string().nonempty({ message: "Subject is required" }),
    message: z.string().nonempty({ message: "Message is required" }),
  });

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;

  const formSubmit = (data: contactFormData) => {
    console.log("form submitted", data);
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
            <form action="" onSubmit={handleSubmit(formSubmit)}>
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Input
                        placeholder="Enter your subject"
                        className="h-12 shadow-none focus:!ring-blue-300"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage className="!mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel />
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="shadow-none focus:!ring-blue-300 min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription />
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

export default ContactPage;
