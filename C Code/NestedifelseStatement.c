#include <stdio.h>
int main()
{
    int num = 10;
    if (num > 0)
    {
        printf("Number is positive\n");
        if (num % 10 == 0)
        {
            printf("Number is even\n");
        }
        else
        {
            printf("Number is odd\n");
        }
    }
    else
    {
        printf("Number is non-positive"\n);
    }
    return 0;
}
