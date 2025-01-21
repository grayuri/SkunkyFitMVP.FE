"use client"

import { updateOne } from "@/services/FetchServices"
import { Box, Spinner } from "@chakra-ui/react"
import { Button, Fieldset, Stack } from "@chakra-ui/react"
import { Field } from "@/components/UI/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/UI/native-select"
import { NumberInputField, NumberInputRoot } from "@/components/UI/number-input"
import { toaster } from "@/components/UI/toaster"
import { useForm } from "react-hook-form"
import { updateSimpleUser } from "./Actions"

interface Inputs {
  age: string
  height: string
  weight: string
  activityLevel: string
  gender: string
}

export default function ProfileForm({ user }: { user: any }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>()

  async function onSubmit(data: Inputs) {
    const profile = {
      age: Number(data.age),
      height: Number(data.height),
      weight: Number(data.weight),
      activityLevel: data.activityLevel
    }

    await updateSimpleUser(profile)

    toaster.create({
      title: "Your Profile Details have been submitted!",
      type: "success"
    })
  }

  return (
    <Box padding="48px">
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Profile Details</Fieldset.Legend>
          <Fieldset.HelperText>
            Please provide your profile details below. This information will be reflected on your diets and training plans.
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content asChild>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              label="Age"
              invalid={!!errors.age?.message}
              errorText={errors.age?.message}
            >
              <NumberInputRoot name="age" min={1} defaultValue={user.age ?? "1"}>
                <NumberInputField borderWidth="2px" borderColor="#B6B6B5" {...register("age")} />
              </NumberInputRoot>
            </Field>

            <Field
              label="Height (cm)"
              invalid={!!errors.height?.message}
              errorText={errors.height?.message}
            >
              <NumberInputRoot name="height" min={1} defaultValue="1">
                <NumberInputField borderWidth="2px" borderColor="#B6B6B5" {...register("height")} defaultValue={user.height ?? "1"} />
              </NumberInputRoot>
            </Field>

            <Field
              label="Weight (kg)"
              invalid={!!errors.weight?.message}
              errorText={errors.weight?.message}
            >
              <NumberInputRoot name="weight" min={1} defaultValue={user.weight ?? "1"}>
                <NumberInputField borderWidth="2px" borderColor="#B6B6B5" {...register("weight")} />
              </NumberInputRoot>
            </Field>


            <Field
              label="Activity Level"
              invalid={!!errors.activityLevel?.message}
              errorText={errors.activityLevel?.message}
            >
              <NativeSelectRoot maxWidth="sm">
                <NativeSelectField
                  borderWidth="2px" borderColor="#B6B6B5"
                  {...register("activityLevel")}
                  defaultValue={user.activityLevel ?? "1"}
                >
                  <option value="SEDENTARY">Sedentary (Office Job)</option>
                  <option value="LIGHT_EXERCISE">Light Exercise (1-2 days/week)</option>
                  <option value="MODERATE_EXERCISE">Moderate Exercise (3-5 days/week)</option>
                  <option value="HEAVY_EXERCISE">Heavy Exercise (6-7 days/week)</option>
                  <option value="ATHLETE">Athlete (2x per day)</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </Field>

            <Field
              label="Gender"
              invalid={!!errors.gender?.message}
              errorText={errors.gender?.message}
            >
              <NativeSelectRoot maxWidth="sm">
                <NativeSelectField
                  borderWidth="2px" borderColor="#B6B6B5"
                  {...register("gender")}
                  defaultValue={user.gender ?? "1"}
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </NativeSelectField>
              </NativeSelectRoot>
            </Field>

            <Button
              type="submit"
              bg="#83B120"
              alignSelf="flex-start"
              _hover={{ bg: "#B5E056" }}
              disabled={isSubmitting}
            >
              {
                isSubmitting && (
                  <Spinner color="white" />
                )
              }
              <span>{isSubmitting ? "Loading..." : "Submit"}</span>
            </Button>
          </form>
        </Fieldset.Content>
      </Fieldset.Root>
    </Box>
  )
}