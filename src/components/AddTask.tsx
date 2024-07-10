"use client";

import { AddtaskSchmea } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Select from "react-select";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import axios from "axios";

interface AddTaskProps {
  isOpenModal: boolean;
  setIsOpenModal: (isOpen: boolean) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ isOpenModal, setIsOpenModal }) => {
  const options = [
    { value: "clydxmxcb00008tcaca9j4e2m", label: "Hitesh" },
    { value: "clya296kp00003o5nrhe8hdzn", label: "Amit" },
  ];

  const form = useForm<z.infer<typeof AddtaskSchmea>>({
    resolver: zodResolver(AddtaskSchmea),
  });

  const onSubmit = async (data: z.infer<typeof AddtaskSchmea>) => {
    console.log(data);
    try {
      await axios
        .post("http://localhost:4000/tasks", data)
        .then((data: any) => {
          console.log(data);
        })
        .catch((error: any) => console.log(error))
        .finally(() => setIsOpenModal(false));
    } catch (error) {
      console.log("error in add task");
    }
  };

  return (
    <>
      <Dialog open={isOpenModal} onOpenChange={() => setIsOpenModal(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Title" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Description" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="stage"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stage</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="stage" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="company_id"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>company Id</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Company id" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    name="contact"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="contact" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="due"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Due Date</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Due..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="created_by_id"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Created By</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="created by" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="assigned_to"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Assigned To</FormLabel>
                        <FormControl>
                          <Select
                            {...field}
                            onChange={(e: any) => {
                              form.setValue(
                                "assigned_to",
                                e.map((item: any) => item.value)
                              );
                            }}
                            isMulti
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTask;
