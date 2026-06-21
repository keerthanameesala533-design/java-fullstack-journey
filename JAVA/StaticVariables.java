class INstanceVariable {
    static int count = 0;

    public static void main(String[] args) {
        System.out.println(count);

        count = 5;

        System.out.println(count);
    }
}
